<template>
  <div>
        <form >
          <v-text-field
            v-model="form.Title"
            label="title"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.Author"
            label="author"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.Rating"
            label="rating"
            type="number"
            required
          ></v-text-field>
          <v-btn class="mr-4" @click="submitForm"> submit </v-btn>
        </form>
        {{this.form}}
  </div>
</template>


<script>
import {BookAPI} from '../axios';

export default {
  name: "HelloWorld",
  data() {
    return {
      form: {
        Title: "",
        Author: "",
        Rating: 0,
      },
    };
  },
  methods: {
    submitForm() {
      // console.log(this.form)
      BookAPI.createBook(this.form)
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

