<template>
  <main class="px-8 pb-8 pt-8 h-full main-grid bg-zinc-50">
    <h1 class="title flex gap-1 items-center font-rubik uppercase text-sm font-bold text-zinc-700 tracking-wider">
      Dashboard
      <i class='bx bxs-chevron-right'></i>
    </h1>

    <section class="content-finance font-rubik text-zinc-700">
      <div class="cards flex flex-col items-start w-full border p-4 bg-white rounded shadow-sm">
        <div class="w-full">
          <div class="py-2">
            <span class="text-sm tracking-wide flex items-center justify-between cursor-pointer hover:text-purple-600" @click="changeVisibilityCards('debit')">
              Cartões de débito (Limitado a 3)
              <i class='bx bxs-chevron-down' v-if="showDebitCards"></i>
              <i class='bx bxs-chevron-up' v-else></i>
            </span>

            <ul class="mt-3 px-4" :class="{ 'hidden': showDebitCards }">
              <li class="flex justify-between items-center font-thin">
                <span>Nubank</span>

                <div class="flex items-center gap-2">
                  <strong class="text-purple-600">R$ 1234</strong>
                </div>
              </li>
              <li class="flex justify-between items-center font-thin">
                <span>Inter</span>

                <div class="flex items-center gap-2">
                  <strong class="text-purple-600">R$ 1234</strong>
                </div>
              </li>
              <li class="flex justify-between items-center font-thin">
                <span>Santander</span>

                <div class="flex items-center gap-2">
                  <strong class="text-purple-600">R$ 1234</strong>
                </div>
              </li>
            </ul>
          </div>
          <div class="py-2">
            <span class="text-sm tracking-wide flex items-center justify-between cursor-pointer hover:text-purple-600" @click="changeVisibilityCards('credit')">
              Cartoes de crédito (Limitado a 3)
              <i class='bx bxs-chevron-down' v-if="showCreditCards"></i>
              <i class='bx bxs-chevron-up' v-else></i>
            </span>

            <ul class="mt-3 px-4" :class="{ 'hidden': showCreditCards }">
              <li class="flex justify-between items-center font-thin">
                <span>Nubank</span>

                <div class="flex items-center gap-2">
                  <strong class="text-purple-600">R$ 1234</strong>
                </div>
              </li>
              <li class="flex justify-between items-center font-thin">
                <span>Inter</span>

                <div class="flex items-center gap-2">
                  <strong class="text-purple-600">R$ 1234</strong>
                </div>
              </li>
              <li class="flex justify-between items-center font-thin">
                <span>Santander</span>

                <div class="flex items-center gap-2">
                  <strong class="text-purple-600">R$ 1234</strong>
                </div>
              </li>
            </ul>
          </div>
          <div class="py-2">
            <span class="text-sm tracking-wide flex items-center justify-between cursor-pointer hover:text-purple-600" @click="changeVisibilityCards('benefit')">
              Benefícios (Limitado a 3)
              <i class='bx bxs-chevron-down' v-if="showBenefitCards"></i>
              <i class='bx bxs-chevron-up' v-else></i>
            </span>

            <ul class="mt-3 px-4" :class="{ 'hidden': showBenefitCards }">
              <li class="flex justify-between items-center font-thin">
                <span>Nubank</span>

                <div class="flex items-center gap-2">
                  <strong class="text-purple-600">R$ 1234</strong>
                </div>
              </li>
              <li class="flex justify-between items-center font-thin">
                <span>Inter</span>

                <div class="flex items-center gap-2">
                  <strong class="text-purple-600">R$ 1234</strong>
                </div>
              </li>
              <li class="flex justify-between items-center font-thin">
                <span>Santander</span>

                <div class="flex items-center gap-2">
                  <strong class="text-purple-600">R$ 1234</strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <button class="text-white text-sm bg-purple-600 rounded py-2 mt-auto w-full hover:bg-purple-700">
          Adicionar Cartão
        </button>
      </div>
      <div class="main-bank-account bg-white border p-4 shadow-sm rounded">Conta bancária</div>
      <div class="weekly-expenses bg-white border p-4 shadow-sm rounded">Gastos semanais</div>
      <div class="transactions bg-white border p-4 shadow-sm rounded">Transações</div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      showDebitCards: true,
      showCreditCards: true,
      showBenefitCards: true,
    }
  },
  methods: {
    changeVisibilityCards(card) {
      switch (card) {
        case 'debit':
          this.showDebitCards = !this.showDebitCards
          break
        case 'credit':
          this.showCreditCards = !this.showCreditCards
          break
        case 'benefit':
          this.showBenefitCards = !this.showBenefitCards
          break
      }
    }
  }
}
</script>

<style>
.main-grid {
  display: grid;
  grid-template-rows: 1rem;
  gap: 2rem;
  grid-template-areas:
    "title"
    "section";
}

.title {
  grid-area: title;
}
  
.content-finance {
  grid-area: section;
  display: grid;
  gap: 1rem;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 20rem 1fr 1fr;
  grid-template-areas: 
    "cards main-bank-account main-bank-account"
    "cards weekly-expenses transactions";
}


.cards {
  grid-area: cards;
  display: flex;
  flex-direction: column;
}

.main-bank-account {
  grid-area: main-bank-account;
}

.weekly-expenses {
  grid-area: weekly-expenses;
}

.transactions {
  grid-area: transactions;
}
</style>
