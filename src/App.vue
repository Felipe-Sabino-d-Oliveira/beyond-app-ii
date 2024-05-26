<template>
	<v-app >
		<v-main class="main">
			<Header v-if="$route.name !== 'login' && $route.name !== 'cadastro'" />
			<router-view></router-view>
			<Footer v-if="$route.name !== 'login' && $route.name !== 'cadastro'" />
		</v-main>
	</v-app>

</template>

<script setup>
import Header from "./components/MyHeader.vue";
import Footer from "./components/MyFooter.vue";
</script>