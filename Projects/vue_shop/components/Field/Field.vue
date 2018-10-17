<template>
  <div v-if="type === 'textarea'" :class="['text-field', {'invalid': !!errorMsg}]">
    <textarea
      :id="type"
      class="text-field__textarea"
      @change="$emit('change', $event.target.value)"
      v-validate="rule"
      @blur="handleBlur"
      :name="name"
    />
    <label :for="id" :class="['text-field__label', {'is-active': !!value}]"><fa v-if="icon" class="text-field__icon" :icon="[icon.prefix, icon.class]" /><slot></slot></label>
    <div v-if="errorMsg" class="field__error">* {{ errorMsg }}</div>
  </div>
  <div v-else :class="['field', {'invalid': !!errorMsg}]">
    <input
      :id="id" :class="['field__input', {'is-active': !!value}]"
      :type="type"
      v-validate="rule"
      :name="name"
      @change="$emit('change', $event.target.value)"
      @blur="handleBlur"
    >
    <label :for="id" class="field__label">
      <slot></slot>
    </label>
    <fa v-if="icon" class="field__icon" :icon="[icon.prefix, icon.class]" />
    <div v-if="errorMsg" class="field__error">* {{ errorMsg }}</div>
  </div>
</template>

<script>
export default {
  name: 'Field',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    id: {
      type: String,
      default: 'inp'
    },
    value: {
      type: String,
      default: ''
    },
    icon: {
      type: Object
    },
    rule: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      errorMsg: ''
    }
  },
  mounted () {
    this.$validator.localize(this.$store.state.i18n.locale)
  },
  methods: {
    handleBlur (e) {
      this.$validator.validate().then(result => {
        this.errorMsg = ''
        if (!result) {
          let field = this.errors.items.find(item => item.field === this.name)
          this.errorMsg = field.msg
        }
      })

      this.$emit('blur', this.name, this.fields[this.name].valid)
    }
  }
}
</script>

<style lang="scss">
@import "field";
</style>
