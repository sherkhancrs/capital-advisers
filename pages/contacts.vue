<template>
    <div class="form-container">
        <div class="image"></div>
        <div class="form">
            <p class="label">Ваш email</p>
            <input class="input" placeholder="alisher@foxout.kz">
            <p class="label">Ваше имя</p>
            <input class="input" placeholder="Алишер Толебердыев">
            <p class="label">Ваше сообщение</p>
            <textarea></textarea>
            <div class="btn-container"><button class="button-reverse">Send</button></div>
        </div>
    </div>
</template>
<script>
export default {
    layout: "contact"
}
</script>
<style scoped>
.form-container {
    height: 512px;
    margin: 48px 0 149px;
    /* padding:  */
    display: flex;
    box-shadow: 0 25px 50px rgba(0,0,0,0.06);
}
.image {
    width: 50%;
    height: 100%;
    background-color: rgba(19,48,79, 0.9);
    border-radius: 10px;
}
.form {
    width: 50%;
    height: 100%;
    padding: 26px 43px 28px;
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
    font-family: "SFUI-Bold", "Lato-Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.btn-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
}
@media (max-width: 40em) {
	.form-container {
		flex-direction: column;
	}
	.form {
		width: 100%;
	}
	.image {
		width: 100%;
		height: 300px;
	}
}
</style>
