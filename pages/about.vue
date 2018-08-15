<template>
    <div class="about-layout">
        <h1>Our team</h1>
        <div class="team-container">
            <div class="member" v-for="member in 4" :key="member.id">
							<div class="member-photo"></div>
							<p class="name">Marc Zuckerberg</p>
							<p class="job">Founder & CEO</p>
						</div>
        </div>
    </div>
</template>
<script>
export default {
  layout: "about"
};
</script>
<style scoped>
h1 {
  font-size: 34px;
}
.team-container {
  display: flex;
  flex-wrap: wrap;
}
.member {
  margin-left: 78px;
}
.member:first-child {
  margin: 0;
}
.member-photo {
  width: 191px;
  height: 191px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.7);
}
p {
  font-size: 15px;
  margin: 0;
  line-height: 19px;
}
.name {
  margin-top: 32px;
}
.job {
  color: #ef741c;
}
.about-layout {
  margin: 80px 0 170px;
}
@media (max-width: 40em) {
  .member {
		margin-top: 30px;
		margin-left: 0;
  }
  .member:first-child {
		margin-top: 40px;
	}
	.team-container {
		justify-content: center;
	}
}
@media (min-width: 40em) and (max-width: 50em) {
  .member {
		margin-top: 30px;
    margin-left: 50px;
    margin-right: 50px;
  }
  .member:first-child {
    margin: 30px 50px;
  }
  .member:nth-child(odd){
    /* margin-left: 0;
    margin-right: 0; */
  }
	.team-container {
		justify-content: center;
	}
}

</style>
