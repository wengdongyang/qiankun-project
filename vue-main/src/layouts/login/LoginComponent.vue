<template>
  <section class="login-container">
    <a-form class="login-form" :form="form" @submit="onClickSubmit">
      <a-form-item>
        <a-input v-decorator="['userName', {rules: [{required: true}]}]" placeholder="Username">
          <a-icon slot="prefix" type="user" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['password', {rules: [{required: true}]}]" type="password" placeholder="Password">
          <a-icon slot="prefix" type="lock" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" class="login-form-button"> Login </a-button>
      </a-form-item>
    </a-form>
  </section>
</template>

<script>
import {mapActions} from 'vuex';
// apis
import {apiAuthSessionLogin} from '@src/apis/auth';
// utils
// types
// stores
// configs
// components
export default {
  name: 'LoginComponent',
  components: {},
  computed: {},
  data() {
    const _this = this;
    return {
      form: _this.$form.createForm(_this),
    };
  },
  methods: {
    ...mapActions(['setUserinfo']),
    async onClickSubmit(e) {
      try {
        e.preventDefault();
        const _this = this;

        // const values = await _this.form.validateFields();
        // const {code, data} = await apiAuthSessionLogin(values);
        // if (code === '200') {
        //   await _this.setUserinfo(data);
        //   _this.$router.push({path: '/root'});
        // }

        _this.$router.push({path: '/root'});
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  width: 400px;
  height: 300px;
  margin: 0 auto;
}
</style>
