<template>
  <div>page b</div>
</template>

<script lang="ts">

import ElStyle from "../../components/ElStyle.css"

// const ElStyle = import.meta.glob("../../components/ElStyle.css")

// const ElStyle = import.meta.glob("../../components/ElStyle.css", { eager: true })

export default {
  async mounted() {
    console.log("b page....")
    console.log(ElStyle)

    // const keys = Object.keys(ElStyle)
    // console.log(ElStyle[keys[0]])
    // ElStyle[keys[0]]().then((data: any) => {
    //   console.log(data)
    // })

    // const keys = Object.keys(ElStyle)
    // console.log((ElStyle[keys[0]] as any).default)
  }
}


</script>