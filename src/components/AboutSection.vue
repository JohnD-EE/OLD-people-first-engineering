<template>
  <section id="about">
    <v-container fluid class="pt-15 pb-15 mt-15">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="8">
              <h1 class="font-weight-light display-2">About</h1>
              <h1 class="font-weight-light display-1 mb-3">
                Why do we need People First Engineering?
              </h1>
              <v-row class="mt-15">
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon1.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="">
                    Are you losing money through poor productivity and unused creativity? Sub-optimal 
                    morale, low engagement, and sour relationships are a significant drain on finances.
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon2.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="">
                    Do you have the insights, the models, language and tools to create an Engineering 
                    environment where your people are trusted and a natural order can emerge?
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon3.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="">
                    Your Engineers are being held back.  Set them free from life draining
                    procedures, lack of trust, and convoluted legacy code.
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="4" class="d-none d-md-flex pa-15">
              <v-img
                src="@/assets/img/heartComputer.jpg"
                class="d-block ml-auto mr-auto"
                max-width="350px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#about {
  background-color: #BBB;
}
</style>
