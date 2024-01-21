<template>
	<div>
		<button type="button" @click="doRequestUnique">Do Request (cancel similar request)</button>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import directives from 'directives-lib'

defineExpose({
	//
})
</script>
