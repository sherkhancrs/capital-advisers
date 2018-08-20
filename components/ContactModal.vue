<template>
    <div class="modal" @click="checkClassName">
        <div class="container c">
        <div class="row center-sm">
            <div class="col-md-6 col-xs-12 col-sm-6 form" @submit.prevent="submit" style="margin-left: 0 !important;">
                <p class="label">Ваш email</p>
                <input class="input"  v-model="email" placeholder="alisher@foxout.kz" required>
                <p class="label">Ваше имя</p>
                <input class="input" v-model="name" placeholder="Алишер Толебердыев">
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
      this.$store.dispatch("mailUs", { email: this.email, body: this.text });
      this.email = "";
      this.name = "";
      this.text = "";
    },
    checkClassName(e) {
      if (
        e.target.className === "modal" ||
        e.target.className === "container c"
      ) {
        this.close();
      }
    },
    close() {
      this.$store.commit("SET_CONTACT_MODAL", false);
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

.modal {
  padding-top: 10%;
  position: fixed;
  z-index: 1110;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}
.box-shadow {
	box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
}
/* background-color: rgba(255, 255, 255, 0.9); */
/* backdrop-filter: blur(5px); */

/* @supports (backdrop-filter: blur(5px)) or (-webkit-backdrop-filter: blur(5px)) {
  .modal {
    background-color: rgba(255, 255, 255, 0.7);
  }
} */

.c {
  margin-top: 70px;
  margin-bottom: 100px;
}
.image {
  height: 100%;
  background-color: rgba(19, 48, 79, 0.9);
	border-radius: 10px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.form {
  height: 100%;
  padding: 26px 43px 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
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
  .form {
    border-radius: 10px;
	}
	.c {
		margin: 5px;
	}
	.modal {
		padding-top: 13%;
	}
}
@media (min-width: 40em) and (max-width: 50em) {
  .container {
    margin-bottom: 40px;
  }
  .form {
		border-radius: 10px;
	}
	.c {
		margin: 5px;
	}
	.modal {
		padding-top: 25%;
	}
	.box-shadow {
		box-shadow: none;
	}
}
</style>
