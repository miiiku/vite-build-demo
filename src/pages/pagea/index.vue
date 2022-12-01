<template>
  <div>page a</div>
</template>

<script lang="ts">

// import ElStyle from "../../components/ElStyle.css"

// const ElStyle = import.meta.glob("../../components/ElStyle.css")

const ElStyle = import.meta.glob("../../components/ElStyle.css", { eager: true })

export default {
  async mounted() {
    console.log("a page....")
    console.log(ElStyle)
    console.log(ElStyle.default)
    
    // const keys = Object.keys(ElStyle)
    // ElStyle[keys[0]]().then((data: any) => {
    //   console.log(data.default)
    // })

    const keys = Object.keys(ElStyle)
    console.log((ElStyle[keys[0]] as any).default)
  }
}


</script>