<template>
  <div>
    <div class="main-h">
      <div class="container">
        <div class="row middle-xs">
          <div class="col-xs-12">
            <h1 class="bolded">Contact Us</h1>
            <h3 class="thined">
              We would be delighted to answer any inquiry you might have about your financial affairs, just use the form below or choose one of the alternative methods of communication. We’re available from Monday to Friday, 07:30-19:00 to take your call.
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container c">
      <div class="row" style="border-radius: 10px;">
        <div class="col-md-6 col-xs-12 col-sm-12 form" style="" @submit.prevent="submit">
            <p class="label">Ваш email</p>
            <input class="input"  v-model="email" placeholder="johndoe@gmail.com" required>
            <p class="label">Ваше имя</p>
            <input class="input" v-model="name" placeholder="John Doe">
            <p class="label">Ваше сообщение</p>
            <textarea v-model="text" required></textarea>
            <div class="btn-container"><button type="submit" @click="submit" class="button-reverse">Send</button></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      name: "",
      text: ""
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("mailUs", {email: this.email, body: this.text});
      this.email = "";
      this.name = "";
      this.text = "";
    }
  }
};
</script>
<style scoped>
.main-h {
  background-color: #595959;
  color: white;
  padding-top: 140px;
  padding-bottom: 100px;
}

.c {
  /* height: 512px; */
  margin-top: 70px;
  margin-bottom: 100px;
  /* margin: 48px 0 149px; */
  /* padding:  */
  border-radius: 10px;
}
.image {
  height: 100%;
  background-color: rgba(19, 48, 79, 0.9);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.form {
  height: 100%;
  padding: 26px 43px 20px;
  border-radius: 10px;
  box-shadow: 0 13px 20px 8px rgba(0, 0, 0, 0.06);
}
.input {
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  padding: 15px 11px;
  width: 100%;
  color: #000000;
  outline: none;
}
.input:placeholder {
  color: #9c9c9c;
}
textarea {
  height: 162px;
  width: 100%;
  outline: none;
  border: 1px solid #f3f3f3;
  resize: none;
}
.label {
  font-family: "SFUI-Bold", "Lato-Regular", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  text-align: left;
}
.btn-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
}
@media (max-width: 40em) {
  .container {
    margin-bottom: 40px;
  }
  .image {
    height: 300px;
  }
}
@media (min-width: 40em) and (max-width: 50em) {
  .container {
    margin-bottom: 40px;
    padding: 20px;
  }
  .image {
    height: 300px;
  }
}
</style>
