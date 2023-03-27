<template>
  <nav class="flex flex-col gap-6 h-screen bg-zinc-900">
    <div class="h-full grid items-start pt-16 relative">
      <ul class="grid text-zinc-300">
        <li class="justify-center cursor-pointer h-16 hover:bg-zinc-800 flex items-center font-rubik font-thin transition duration-200">
          <i class='bx bx-grid-alt text-lg'></i>
        </li>
        <li class="justify-center cursor-pointer h-16 hover:bg-zinc-800 flex items-center font-rubik font-thin transition duration-200">
          <i class='bx bx-credit-card text-lg'></i>
        </li>
        <li class="justify-center cursor-pointer h-16 hover:bg-zinc-800 flex items-center font-rubik font-thin transition duration-200">
          <i class='bx bx-dollar-circle text-lg'></i>
        </li>
        <li class="justify-center cursor-pointer h-16 hover:bg-zinc-800 flex items-center font-rubik font-thin transition duration-200">
          <i class='bx bx-trending-up text-lg'></i>
        </li>
        <li class="justify-center cursor-pointer h-16 hover:bg-zinc-800 flex items-center font-rubik font-thin transition duration-200">
          <i class='bx bx-coin-stack text-lg'></i>
        </li>
      </ul>
    </div>

    <span class="absolute text-xs font-rubik text-zinc-600 bottom-0 pl-6 pb-4">v1.0.0</span>
  </nav>
</template>

<script>
export default {
}
</script>
