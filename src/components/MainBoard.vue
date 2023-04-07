<template>
  <main class="px-8 pb-8 pt-8 h-full main-grid bg-zinc-50">
    <section class="content-finance font-rubik text-zinc-700">
      <div class="cards flex flex-col items-start w-full bg-white shadow rounded overflow-hidden pb-4">
        <div class="w-full font-normal flex items-center justify-between gap-2.5 bg-zinc-700 text-white p-1.5 px-4">
          <strong class="flex items-center gap-2 font-normal">
            <i class='bx bx-credit-card text-2xl'></i>
            Cartões
          </strong>
          <div class="px-1 rounded flex justify-center items-center hover:bg-zinc-500">
            <i class='bx bx-right-top-arrow-circle text-2xl cursor-pointer'></i>
          </div>
        </div>
        <div class="w-full mt-4 px-4">
          <div class="pb-2">
            <span class="tracking-wide flex items-center justify-between cursor-pointer hover:text-purple-600" @click="changeVisibilityCards('debit')">
              Débito
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
            <span class="tracking-wide flex items-center justify-between cursor-pointer hover:text-purple-600" @click="changeVisibilityCards('credit')">
              Crédito
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
            <span class="tracking-wide flex items-center justify-between cursor-pointer hover:text-purple-600" @click="changeVisibilityCards('benefit')">
              Benefícios
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
        
        <div class="mt-auto flex items-center justify-center w-full">
          <span class="px-2 py-1 text-center text-xs rounded-full text-white bg-zinc-600">Todas abas são limitadas a 4 cartões</span>
        </div>
      </div>
      <div class="main-bank-account bg-white text-zinc-700 shadow rounded overflow-hidden">
        <div class="font-normal flex items-center justify-between gap-2 bg-zinc-700 text-white p-1.5 px-4">
          <strong class="flex items-center gap-2.5 font-normal">
            <i class='bx bx-wallet text-2xl'></i>
            Carteira
          </strong>
          <div class="px-1 rounded flex justify-center items-center hover:bg-zinc-500">
            <i class='bx bx-right-top-arrow-circle text-2xl cursor-pointer'></i>
          </div>
        </div>
      </div>
      <div class="weekly-expenses bg-white text-zinc-700 shadow rounded overflow-hidden">
        <div class="font-normal flex items-center justify-between gap-2 bg-zinc-700 text-white p-1.5 px-4">
          <strong class="flex items-center gap-2.5 font-normal">
            <i class='bx bxs-bar-chart-alt-2 text-2xl'></i>
            Gastos semanais
          </strong>
          <div class="px-1 rounded flex justify-center items-center hover:bg-zinc-500">
            <i class='bx bx-right-top-arrow-circle text-2xl cursor-pointer'></i>
          </div>
        </div>

      </div>
      <div class="categories bg-white text-zinc-700 shadow rounded overflow-hidden">
        <div class="font-normal flex items-center justify-between gap-2 bg-zinc-700 text-white p-1.5 px-4">
          <strong class="flex items-center gap-2.5 font-normal">
            <i class='bx bx-category-alt text-2xl'></i>
            Categorias
          </strong>
          <div class="px-1 rounded flex justify-center items-center hover:bg-zinc-500">
            <i class='bx bx-right-top-arrow-circle text-2xl cursor-pointer'></i>
          </div>
        </div>
      </div>
      <div class="transactions bg-white shadow rounded overflow-hidden">
        <div class="font-normal flex items-center justify-between gap-2.5 bg-zinc-700 text-white p-1.5 px-4">
          <strong class="flex items-center gap-2 font-normal">
            <i class='bx bx-transfer-alt text-2xl'></i>
            Transações
          </strong>
          <div class="px-1 rounded flex justify-center items-center hover:bg-zinc-500">
            <i class='bx bx-right-top-arrow-circle text-2xl cursor-pointer'></i>
          </div>
        </div>

        <div class="h-52 overflow-y-auto mt-4 mx-4">
          <table class="w-full text-center">
            <tr>
              <td class="py-1.5">Twitch</td>
              <td class="py-1.5">{{ new Date().toDateString() }}</td>
              <td class="py-1.5">Entretenimento</td>
              <td class="text-red-500">R$ 29,90</td>
            </tr>
            <tr>
              <td class="py-1.5">Depósito</td>
              <td class="py-1.5">{{ new Date().toDateString() }}</td>
              <td class="py-1.5">Pagamento</td>
              <td class="text-green-500">+R$ 500,00</td>
            </tr>
            <tr>
              <td class="py-1.5">Twitch</td>
              <td class="py-1.5">{{ new Date().toDateString() }}</td>
              <td class="py-1.5">Entretenimento</td>
              <td class="text-red-500">R$ 29,90</td>
            </tr>
            <tr>
              <td class="py-1.5">Depósito</td>
              <td class="py-1.5">{{ new Date().toDateString() }}</td>
              <td class="py-1.5">Pagamento</td>
              <td class="text-green-500">+R$ 500,00</td>
            </tr>
            <tr>
              <td class="py-1.5">Twitch</td>
              <td class="py-1.5">{{ new Date().toDateString() }}</td>
              <td class="py-1.5">Entretenimento</td>
              <td class="text-red-500">R$ 29,90</td>
            </tr>
            <tr>
              <td class="py-1.5">Depósito</td>
              <td class="py-1.5">{{ new Date().toDateString() }}</td>
              <td class="py-1.5">Pagamento</td>
              <td class="text-green-500">+R$ 500,00</td>
            </tr>
            <tr>
              <td class="py-1.5">Twitch</td>
              <td class="py-1.5">{{ new Date().toDateString() }}</td>
              <td class="py-1.5">Entretenimento</td>
              <td class="text-red-500">R$ 29,90</td>
            </tr>
            <tr>
              <td class="py-1.5">Depósito</td>
              <td class="py-1.5">{{ new Date().toDateString() }}</td>
              <td class="py-1.5">Pagamento</td>
              <td class="text-green-500">+R$ 500,00</td>
            </tr>
            <tr>
              <td class="py-1.5">Twitch</td>
              <td class="py-1.5">{{ new Date().toDateString() }}</td>
              <td class="py-1.5">Entretenimento</td>
              <td class="text-red-500">R$ 29,90</td>
            </tr>
            <tr>
              <td class="py-1.5">Depósito</td>
              <td class="py-1.5">{{ new Date().toDateString() }}</td>
              <td class="py-1.5">Pagamento</td>
              <td class="text-green-500">+R$ 500,00</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, Title, Tooltip } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale)

export default {
  data() {
    return {
      showDebitCards: true,
      showCreditCards: true,
      showBenefitCards: true,
      chartData: {
        label: 'Dias da semana',
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
        data: [ { data: [30, 50, 10, 25, 333, 500, 12] } ],
        fill: false,
        tension: 0.1
      },
      chartOptions: {
        responsive: true
      }
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
  },
  components: {
  }
}
</script>

<style>
.main-grid {
  display: grid;
  gap: 2rem;
  grid-template-areas:
    "section";
}

.content-finance {
  grid-area: section;
  display: grid;
  gap: 1rem;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 20rem ;
  grid-template-areas: 
    "cards weekly-expenses main-bank-account main-bank-account"
    "cards categories transactions transactions";
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
