<template>
  <a-row class="contact-form form-style" :style="{ margin: '50px 0', width: '700px' }">
    <h2 :style="{ marginBottom: '20px' }">CONTACTS</h2>

    <a-row type="flex" class="" :style="{ marginBottom: '20px' }" style="flex" justify="center">
      <a-col class="column" :span="12" align="start">
        <a-row :style="{ fontWeight: 'bold' }">Address:</a-row>
        <a-row>Company</a-row>
        <a-row>4647 Eagles Nest Drive</a-row>
        <a-row>Redding, CA 78134</a-row>
        <a-row>Phone: +1 447 204 8968</a-row>
      </a-col>
      <a-col :span="12" align="start">
        <a-col class="column" :span="24" align="start">
          <a-row :style="{ fontWeight: 'bold' }">Email:</a-row>
          <a-row>Support: support@company.com</a-row>
          <a-row>Sales: sales@company.com</a-row>
        </a-col>
        <a-col :span="24" align="start">
          <a-row :style="{ fontWeight: 'bold' }">Websites:</a-row>
          <a-row>
            <router-link to="/contact" class="link" :style="{ marginLeft: '0px' }">www.company.com</router-link>
          </a-row>
        </a-col>
      </a-col>
    </a-row>

    <a-form :form="form" @submit="handleSubmit">
      <a-form-item class="input-form" v-bind="formItemLayout" label="Name">
        <a-input
          class="input-field"
          placeholder="Name"
          v-decorator="[
            'name',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your name'
                }
              ]
            }
          ]"
        />
      </a-form-item>
      <a-form-item class="input-form" v-bind="formItemLayout" justify="center" label="Email">
        <a-input
          placeholder="Email"
          v-decorator="[
            'email',
            {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!'
                },
                {
                  required: true,
                  message: 'Please input your E-mail!'
                }
              ]
            }
          ]"
        />
      </a-form-item>
      <a-form-item label="Message" v-bind="formItemLayout">
        <a-input
          type="textarea"
          placeholder="Message"
          :style="{ height: '180px' }"
          v-decorator="[
            'message',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your message'
                }
              ]
            }
          ]"
        />
      </a-form-item>
      <a-form-item :style="{ margin: '0px' }">
        <a-button type="primary" html-type="submit">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </a-row>
</template>

<script>
export default {
  data: function() {
    return {
      email: "",
      password: "",
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" })
    };
  },
  computed: {
    //Formating form fields
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            labelCol: { span: 3 },
            wrapperCol: { span: 21 }
          }
        : {};
    }
  },
  methods: {
    //Receiving form input and checking for errors
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleFormLayoutChange(e) {
      this.formLayout = e.target.value;
    }
  }
};
</script>

<style scoped></style>
