<!-- <template>
  <div class="container mx-auto p-4">
    <div class="card flex justify-center mb-4">
      <label for="multiple-ac-1" class="font-bold mb-2 block">With Typeahead</label>
      <AutoComplete
        v-model="selectedCountry"
        inputId="multiple-ac-1"
        multiple
        fluid
        :suggestions="filteredCountries"
        @complete="search"
        @select="onSelectCountry"
        placeholder="Nombre del País"
      >
        <template #option="slotProps">
          <div class="flex items-center p-2">
            <img
              :alt="slotProps.option.name"
              src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
              :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`"
              style="width: 18px"
            />
            <div>{{ slotProps.option.name }}</div>
          </div>
        </template>
      </AutoComplete>
    </div>

    <div>
      <div v-for="country in selectedCountries" :key="country.code" class="tag">
        {{ country.name }}
        <button @click="removeCountry(country)">&times;</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { CountryService } from '@/service/CountryService';
import AutoComplete from 'primevue/autocomplete';

interface Country {
  name: string;
  code: string;
}

const countries = ref<Country[]>([]);
const selectedCountry = ref<Country | null>(null);
const filteredCountries = ref<Country[]>([]);
const selectedCountries = ref<Country[]>([]);

onMounted(() => {
  CountryService.getCountries().then((data: Country[]) => {
    countries.value = data;
    console.log('Loaded countries:', countries.value);
  });
});

const search = (event: { query: string }) => {
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

const onSelectCountry = (event: { value: Country }) => {
  const country = event.value;
  console.log('Country selected:', country);

  if (
    country &&
    country.name &&
    country.code &&
    !selectedCountries.value.some((c) => c.code === country.code)
  ) {
    selectedCountries.value.push(country);
  }
  console.log(
    'Selected countries:',
    selectedCountries.value.map((c) => c.name),
  );
  selectedCountry.value = null; // Reiniciar el campo de selección
};

const removeCountry = (country: Country) => {
  selectedCountries.value = selectedCountries.value.filter((c) => c.code !== country.code);
};
</script>

<style scoped>
.tag {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid black;
  border-radius: 0.375rem;
}
</style> -->

<!-- <template>
  <div class="container mx-auto p-4">
    <div class="card flex justify-center mb-4">
      <AutoComplete
        v-model="selectedCountry"
        optionLabel="name"
        :suggestions="filteredCountries"
        @complete="search"
        @select="addCountry"
        class="w-full"
        inputClass="p-2 border border-gray-300 rounded-md w-full"
      >
        <template #option="slotProps">
          <div class="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
            <img
              :alt="slotProps.option.name"
              src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
              :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`"
              style="width: 18px"
            />
            <div>{{ slotProps.option.name }}</div>
          </div>
        </template>
      </AutoComplete>
    </div>
    <div class="selected-countries flex flex-wrap">
      <div
        v-for="country in selectedCountries"
        :key="country.code"
        class="selected-country flex items-center bg-blue-100 text-blue-800 p-2 m-1 rounded-md"
      >
        <span>{{ country.name }}</span>
        <button @click="removeCountry(country)" class="ml-2 text-red-500">x</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AutoComplete from 'primevue/autocomplete';

const CountryService = {
  getCountries() {
    return Promise.resolve([
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'Canada', code: 'CA' },
      { name: 'Germany', code: 'DE' },
      { name: 'Spain', code: 'ES' },
      { name: 'USA', code: 'US' },
    ]);
  },
};

const countries = ref([]);
const selectedCountry = ref(null); // Ensure selectedCountry is initialized correctly
const filteredCountries = ref([]);
const selectedCountries = ref([]); // Use reactive array for selected countries

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

const addCountry = (event) => {
  const country = event; // The selected country from the AutoComplete
  if (!selectedCountries.value.some((c) => c.code === country.code)) {
    selectedCountries.value.push(country);
    selectedCountry.value = null; // Clear the input after selection
  }
};

const removeCountry = (country) => {
  selectedCountries.value = selectedCountries.value.filter((c) => c.code !== country.code);
};
</script>

<style>
.selected-countries {
  display: flex;
  flex-wrap: wrap;
}

.selected-country {
  display: flex;
  align-items: center;
  background-color: #e0e0e0;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 0.25rem;
}

.selected-country button {
  background: none;
  border: none;
  color: red;
  cursor: pointer;
}

.flag {
  display: inline-block;
  width: 18px;
  height: 12px;
  background-size: cover;
}
</style> -->

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
      <template #item="slotProps">
        <div class="flex items-center">
          <img
            :alt="slotProps.item.name"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            :class="`flag flag-${slotProps.item.code.toLowerCase()} mr-2`"
            style="width: 18px"
          />
          <div>{{ slotProps.item.name }}</div>
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
        <div class="flex items-center">
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

    <!-- <AutoComplete
      v-model="selectedCountry"
      optionLabel="name"
      :suggestions="filteredCountries"
      @complete="search"
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
    </AutoComplete> -->
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
</script>
