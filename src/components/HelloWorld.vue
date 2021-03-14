<template>
  <div>
        <form >
          <v-text-field
            v-model="form.title"
            label="Title"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.author"
            label="Author"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.rating"
            label="Rating"
            required
          ></v-text-field>
          <v-btn class="mr-4" @click="submitForm"> submit </v-btn>
        </form>
        {{this.form}}
  </div>
</template>


<script>
import {HTTP} from "@/axios.js";

export default {
  name: "HelloWorld",
  data() {
    return {
      form: {
        title: "",
        author: "",
        rating: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log(this.form)

      HTTP
        .post("/book", this.form)
        .then((res) => {
          //Perform Success Action
          console.log(res);
        })
        .catch((error) => {
          // error.response.status Check status code
          console.log(error);
        })
        .finally(() => {
          //Perform action in always
        });
    },
  },
};
</script>

