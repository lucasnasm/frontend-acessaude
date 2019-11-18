<template>
  <v-card>
<v-card-title primary-title class="justify-center">
  Cria sua conta AcesSaude
</v-card-title>
<v-container>
    
  
  <v-row class="justify-center">
  <v-form v-model="valid" ref="form" lazy-validation>
  <v-col cols="12">
    <v-avatar
    
    >
    <v-icon>fa-account</v-icon>
      <img src="src" alt="alt">
    </v-avatar>
    <v-text-field 
      label="Nome da Clinica"
      v-model="clinica.nome"
      outlined
      required
    ></v-text-field>
    </v-col>
    <v-col cols="12">
    <v-text-field
    label="CNPJ"
    v-model="clinica.cnpj"
    :counter="18"
    outlined
    required
    v-mask="'##.###.###/####-##'"
    ></v-text-field>
</v-col>
  <v-col>
    <v-row>
      <v-col cols="6">
    <v-text-field
      label="telefone"
      v-model="clinica.telefone"
      outlined
      required
      v-mask="['(##) # ####-####', '(##) ####-####']"
    ></v-text-field>
    </v-col>

    <v-col cols="6">
    <v-text-field
      label="Whatsapp"
      v-model="clinica.whatsapp"
      outlined
      required
      v-mask="'(##) # ####-####'"

    ></v-text-field>
    </v-col>
    </v-row>
    </v-col>
      <v-col cols="12">
    <v-text-field
      label="CEP"
      v-model="clinica.cep"
      outlined
      required
      v-mask="'#####-###'"
      @keyup="preencherCep"
    ></v-text-field>
  </v-col>
    <v-col>
    <v-row>
      <v-col cols="9">
    <v-text-field
      label="Cidade"
      v-model="clinica.cidade"
      outlined
      required
    ></v-text-field>
    </v-col>

    <v-col cols="3">
    <v-text-field
      label="Estado"
      v-model="clinica.estado"
      outlined
      required
    ></v-text-field>
    </v-col>
    </v-row>
    </v-col>
    <v-col>
    <v-row>
      <v-col cols="9">
    <v-text-field
      label="Endereco"
      v-model="clinica.endereco"
      outlined
      required
    ></v-text-field>
    </v-col>

    <v-col cols="3">
    <v-text-field
      label="Numero"
      v-model="clinica.numero"
      outlined
      required
    ></v-text-field>
    </v-col>
    </v-row>
    </v-col>    <v-col>
    <v-row>
      <v-col cols="6">
    <v-text-field
      label="Bairro"
      v-model="clinica.bairro"
      outlined
      required
    ></v-text-field>
    </v-col>

    <v-col cols="6">
    <v-text-field
      label="Complemento"
      v-model="clinica.complemento"
      outlined
      required
    ></v-text-field>
    </v-col>
    </v-row>
    </v-col>
  <v-col cols="12">
    <v-text-field
      label="E-mail"
      v-model="clinica.email"
      
      outlined
      required
    ></v-text-field>
  </v-col>
  <v-col cols="12">
    <v-text-field
      label="Senha"
      type="password"
      v-model="clinica.senha"
      :rules="[rules.required, rules.min]"
      outlined
      required
    ></v-text-field>
  </v-col>
  <v-col>
    <v-textarea
      label="Descrição"
      v-model="clinica.descricao"
      textarea
      outlined
    ></v-textarea>
  </v-col>
  <v-col>
    area para fotos
  </v-col>

  <v-col>
    <v-checkbox
      label="Você aceita o termos?"
      v-model="checkbox"
      :rules="[v => !!v || 'Aceite para continuar!']"
      required
    ></v-checkbox>
</v-col>
<v-col>
    <v-btn
      @click="submit"
      :disabled="!checkbox"
      class="mr-4"
      color="primary"
      block
    >
      Criar Conta
    </v-btn>
  </v-col>
  </v-form>
  </v-row>
  
    </v-container>
    </v-card>
</template>


<script>
import { api, getCep } from "@/services/api"
import { mask } from "vue-the-mask"

export default {
  name: "Clinica",
  directives: { mask },
  data: () => ({
    valid: true,
    clinica: {
        email: null,
        cidade: null,
        senha: null,
        cnpj: null,
        estado: null,
        foto_portfolio: null,
        numero: null,
        descricao: null,
        telefone: null,
        foto_perfil: null,
        bairro: null,
        whatsapp: null,
        cep: '',
        nome: null,
        complemento: null,
        endereco: null
    },
    rules: {
          required: value => !!value || 'campo obrigatório.',
          min: v => v.length >= 9 || 'A sua senha deve ter pelo menos 8 caracteres',
        },
    emailRules: [v => !!v || "Informe seu E-mail", v => /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(v) || "Informe um email válido!!! "],
    checkbox: false
  }),

  methods: {
    preencherCep(){
        if (this.clinica.cep.length === 9) {
          getCep(this.clinica.cep).then(response => {
            this.clinica.endereco = response.data.logradouro,
            this.clinica.bairro = response.data.bairro,
            this.clinica.estado = response.data.uf,
            this.clinica.cidade = response.data.localidade
        })
      }
    },
    submit() {

        api.post("/clinica", this.clinica);
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>

</style>
