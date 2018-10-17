<template>
  <form @submit.prevent="submitHandle" class="form">
    <field
      v-for="field in fieldsArray"
      :key="field.name"
      :name="field.name"
      :type="field.type"
      :rule="field.rule"
      :icon="field.icon"
      v-model="field.value"
      @blur="handleValidation"
    >{{ field.placeholder }}</field>
    <div class="btn-group">
      <button v-for="button in buttons" :key="button.text" class="btn-main btn-main--danger" @click="button.handler">{{ button.text }}</button>
      <button class="btn-main btn-main--danger" type="submit" ref="submitBtn">{{ $t('buttons.submit') }}</button>
    </div>
  </form>
</template>

<script>
import Field from '~/components/Field'

export default {
  name: 'MainForm',
  components: {
    Field
  },
  props: {
    reqFields: {
      type: Array,
      default: () => ['name', 'email', 'phone']
    },
    buttons: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      formFields: {
        name: {
          rule: 'required',
          placeholder: this.$t('placeholders.name'),
          name: 'name',
          type: 'text',
          icon: {
            prefix: 'far',
            class: 'user'
          },
          value: '',
          isValid: false
        },
        email: {
          rule: 'required|email',
          placeholder: this.$t('placeholders.mail'),
          name: 'email',
          type: 'email',
          icon: {
            prefix: 'far',
            class: 'envelope'
          },
          value: '',
          isValid: false
        },
        phone: {
          rule: 'required|numeric',
          placeholder: this.$t('placeholders.phone'),
          name: 'phone',
          type: 'tel',
          value: '',
          icon: {
            prefix: 'fas',
            class: 'mobile-alt'
          },
          isValid: false
        },
        message: {
          rule: 'required',
          placeholder: this.$t('placeholders.message'),
          name: 'message',
          type: 'textarea',
          value: '',
          icon: {
            prefix: 'far',
            class: 'comments'
          },
          isValid: false
        }
      }
    }
  },
  computed: {
    fieldsArray () {
      return Object.values(this.formFields).filter(field => this.reqFields.includes(field.name))
    }
  },
  methods: {
    submitHandle () {
      if (this.fieldsArray.some(field => !field.isValid)) {
        this.$refs.submitBtn.classList.add('shake-anim')
        return
      }
      this.$emit('submit', this.formFields)
    },
    handleValidation (name, isValid) {
      this.formFields[name].isValid = isValid
    }
  }
}
</script>

<style lang="scss">
@import "form";
</style>
