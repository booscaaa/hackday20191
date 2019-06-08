<template>
  <v-app>
    <v-container fluid fill-height grid-list-md>
      <v-layout justify-center align-center>
        <v-flex xs9>
          <v-card dark class="pa-4">
            <v-layout row wrap>
              <v-flex xs6>
                <v-card light height="300" :color="quarto1">
                  <v-container fluid fill-height grid-list-xl>
                    <v-layout justify-center align-center>Quarto 01</v-layout>
                  </v-container>
                </v-card>
              </v-flex>
              <v-flex xs3>
                <v-card light height="300" :color="quarto2">
                  <v-container fluid fill-height grid-list-xl>
                    <v-layout justify-center align-center>Quarto 02</v-layout>
                  </v-container>
                </v-card>
              </v-flex>
              <v-flex xs3>
                <v-card light height="300" :color="cozinha">
                  <v-container fluid fill-height grid-list-xl>
                    <v-layout justify-center align-center>Cozinha</v-layout>
                  </v-container>
                </v-card>
              </v-flex>
              <v-flex xs10>
                <v-card light height="300" :color="sala">
                  <v-container fluid fill-height grid-list-xl>
                    <v-layout justify-center align-center>Sala</v-layout>
                  </v-container>
                </v-card>
              </v-flex>
              <v-flex xs2>
                <v-card light height="300" :color="banheiro">
                  <v-container fluid fill-height grid-list-xl>
                    <v-layout justify-center align-center>Banheiro</v-layout>
                  </v-container>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import io from 'socket.io-client'
export default {
  name: 'HelloWorld',
  data: () => ({
    socket: io('http://localhost:4000'),
    quarto1: 'black',
    quarto2: 'black',
    cozinha: 'black',
    sala: 'black',
    banheiro: 'black'
  }),
  mounted () {
    this.socket.on('connect', () => {
      console.log('conectado')
      // this.socket.emit('join', JSON.stringify({ opa: 'éoq' }))
    })

    this.socket.on('luz', localObject => {
      if (localObject.ligar) {
        switch (localObject.ambiente) {
          case 'Quarto 01':
            this.quarto1 = localObject.corLuz
            break
          case 'Quarto 02':
            this.quarto2 = localObject.corLuz
            break
          case 'Cozinha':
            this.cozinha = localObject.corLuz
            break
          case 'Sala':
            this.sala = localObject.corLuz
            break
          case 'Banheiro':
            this.banheiro = localObject.corLuz
            break
          default:
            break
        }
      } else {
        this.desligarLuzes()
      }
    })
  },
  methods: {
    desligarLuzes () {
      this.quarto1 = 'black'
      this.quarto2 = 'black'
      this.cozinha = 'black'
      this.banheiro = 'black'
      this.sala = 'black'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
