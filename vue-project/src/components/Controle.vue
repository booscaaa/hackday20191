<template>
  <v-app>
    <v-container fluid fill-height grid-list-md>
      <v-layout justify-center align-center>
        <v-flex xs12 lg4>
          <v-card dark class="pa-4">
            <v-card-title>Controle casa</v-card-title>
            <v-card-text>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-select :items="ambientes" v-model="ambiente" label="Ambiente"></v-select>
                </v-flex>
                <v-flex xs6>
                  <v-switch
                    color="primary"
                    v-model="luz"
                    :label="luz ? 'Luz ligada' : 'Luz desligada'"
                  ></v-switch>
                </v-flex>
                <v-flex xs6>
                  <v-switch
                    color="primary"
                    v-model="desligaTodas"
                    :label="desligaTodas ? 'Desliga Todas' : 'Não desliga todas'"
                  ></v-switch>
                </v-flex>
                <v-flex xs12>
                  <v-layout align-center justify-center>
                    <v-color-picker
                      :hide-mode-switch="true"
                      :mode.sync="mode"
                      v-model="colorLight"
                      light
                    ></v-color-picker>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import io from 'socket.io-client'
export default {
  data: () => ({
    ambientes: ['Quarto 01', 'Quarto 02', 'Cozinha', 'Sala', 'Banheiro'],
    ambiente: null,
    luz: false,
    mode: 'hexa',
    colorLight: '#ffffff',
    socket: io('http://localhost:4000'),
    desligaTodas: false
  }),
  watch: {
    ambiente () {
      if (this.desligaTodas) {
        this.luz = false
      }

      let localObject = {
        ligar: this.luz,
        ambiente: this.ambiente,
        corLuz: this.colorLight
      }

      this.socket.emit('luz', localObject)
    },
    colorLight () {
      let localObject = {
        ligar: this.luz,
        ambiente: this.ambiente,
        corLuz: this.colorLight
      }
      this.socket.emit('luz', localObject)
    },
    luz () {
      let localObject = {
        ligar: this.luz,
        ambiente: this.ambiente,
        corLuz: this.colorLight
      }
      this.socket.emit('luz', localObject)
    }
  },
  mounted () {
    this.socket.on('connect', () => {
      console.log('conectado')
      // this.socket.emit('join', JSON.stringify({ opa: 'éoq' }))
    })
  }
}
</script>
