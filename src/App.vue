<template>
  <div class="card">
    <label for="multiple-ac-1" class="font-bold mb-2 block">With Typeahead</label>
    <AutoComplete
      v-model="selectedCountries"
      inputId="multiple-ac-1"
      multiple
      fluid
      :suggestions="filteredCountries"
      @complete="search"
      optionLabel="name"
      class="border border-black rounded-lg"
    >
      <template #option="slotProps">
        <div class="flex items-center">
          <img
            :alt="slotProps.option.name"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`"
            style="width: 18px"
          />
          <div>{{ slotProps.option.name }}</div>
        </div>
      </template>

      <template #chip="slotProps">
        <div class="flex items-center bg-green-500 rounded-lg m-1">
          <img
            :alt="slotProps.value.name"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            :class="`flag flag-${slotProps.value.code.toLowerCase()} mr-2`"
            style="width: 18px"
          />
          <div class="mr-2">{{ slotProps.value.name }} - Custom Text</div>
          <button
            type="button"
            class="p-autocomplete-token-icon pi pi-times cursor-pointer text-black bg-transparent hover:bg-red-500 hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-red-600 dark:hover:text-white"
            @click="removeItem(slotProps.value)"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <!-- <span
            class="p-autocomplete-token-icon pi pi-times cursor-pointer bg-red-500 w-3 h-3"
            @click="removeItem(slotProps.value)"
            
          ></span> -->
        </div>
      </template>
    </AutoComplete>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CountryService } from '@/service/CountryService';
import AutoComplete from 'primevue/autocomplete';

const countries = ref([]);
const selectedCountries = ref([]);
const filteredCountries = ref([]);

onMounted(() => {
  CountryService.getCountries().then((data) => (countries.value = data));
});

const search = (event) => {
  setTimeout(() => {
    if (!event.query.trim().length) {
      filteredCountries.value = [...countries.value];
    } else {
      filteredCountries.value = countries.value.filter((country) => {
        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
      });
    }
  }, 250);
};

const removeItem = (item) => {
  selectedCountries.value = selectedCountries.value.filter((country) => country.code !== item.code);
};
</script>

<!-- <template>
  <div class="card">
    <label for="multiple-ac-1" class="font-bold mb-2 block">With Typeahead</label>
    <AutoComplete
      v-model="selectedCountries"
      inputId="multiple-ac-1"
      multiple
      fluid
      :suggestions="filteredCountries"
      @complete="search"
      optionLabel="name"
      class="border border-black rounded-lg"
    >
      <template #option="slotProps">
        <div class="flex items-center">
          <img
            :alt="slotProps.option.name"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`"
            style="width: 18px"
          />
          <div>{{ slotProps.option.name }}</div>
        </div>
      </template>

      <template #chip="slotProps">
        <div class="flex items-center bg-green-500 rounded-lg m-1">
          <img
            :alt="slotProps.value.name"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            :class="`flag flag-${slotProps.value.code.toLowerCase()} mr-2`"
            style="width: 18px"
          />
          <div class="mr-2">{{ slotProps.value.name }} - Custom Text</div>
          <span
            class="p-autocomplete-token-icon pi pi-times"
            @click="removeItem(slotProps.value)"
          ></span>
        </div>
      </template>
    </AutoComplete>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CountryService } from '@/service/CountryService';
import AutoComplete from 'primevue/autocomplete';

const countries = ref([]);
const selectedCountries = ref([]);
const filteredCountries = ref([]);

onMounted(() => {
  CountryService.getCountries().then((data) => (countries.value = data));
});

const search = (event) => {
  setTimeout(() => {
    if (!event.query.trim().length) {
      filteredCountries.value = [...countries.value];
    } else {
      filteredCountries.value = countries.value.filter((country) => {
        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
      });
    }
  }, 250);
};
</script> -->
