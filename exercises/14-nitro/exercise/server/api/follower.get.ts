export default defineEventHandler(async (event) => {
  const user = await $fetch('https://randomuser.me/api/?results=10')
  return user
})
