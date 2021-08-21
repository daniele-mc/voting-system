<template>
  <form @submit.prevent="onSubmit">
    <h2>Formulário</h2>
    <Input
      type="textarea"
      label="Votação"
      v-model="vt.statement"
      placeholder="Digite o enunciado da votação"
      isRequired="true"
      :error="errors['statement']"
      @input="touched['statement'] = true"
      @blur="checkField('statement')"
    />
    <Input
      label="Opção 1"
      v-model="vt.option1"
      placeholder="Digite a 1ª opção"
      isRequired="true"
      :error="errors['option1']"
      @input="touched['option1'] = true"
      @blur="checkField('option1')"
    />
    <Input
      label="Opção 2"
      v-model="vt.option2"
      placeholder="Digite a 2ª opção"
      isRequired="true"
      :error="errors['option2']"
      @input="touched['option2'] = true"
      @blur="checkField('option2')"
    />
    <Input
      label="Opção 3"
      v-model="vt.option3"
      placeholder="Digite a 3ª opção"
      :error="errors['option3']"
      @input="touched['option3'] = true"
      @blur="checkField('option3')"
    />
    <input type="submit" value="Atualizar" />
    <button @click="$emit('cancel')" type="button">Cancelar</button>
  </form>
</template>

<script>
import Input from './Input.vue'
import { minLengthValidation, requiredValidation } from './validations'

const validate = {
  statement: (value) => minLengthValidation(3, value),
  option1: requiredValidation,
  option2: requiredValidation
}

export default {
  components: { Input },
  props: ['vote'],
  data() {
    const { statement, options } = this.vote || {}
    const [option1, option2, option3] = options || []
    return {
      vt: { statement, option1, option2, option3 },
      errors: {},
      touched: {}
    }
  },
  methods: {
    checkField(name) {
      const value = this.vt[name]
      const error = validate[name] ? validate[name](value) : null
      const nameError = this.touched[name] ? error : null
      this.errors[name] = nameError
    },
    onSubmit() {
      Object.keys(this.vt).forEach((field) => {
        this.touched[field] = true
        this.checkField(field)
      })
      const errorsIsEmpty = !Object.values(this.errors).some((v) => v)
      if (errorsIsEmpty) {
        const options = [
          this.vt.option1,
          this.vt.option2,
          this.vt.option3
        ].filter((o) => o && o.trim() !== '')
        this.$emit('update', {
          statement: this.vt.statement,
          options
        })
      }
    }
  }
}
</script>

<style scoped>
.form-item {
  display: flex;
  margin-bottom: 1.7rem;
}
</style>