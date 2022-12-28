<template>
    <div class="submit-form">
        <div v-if="!submitted">

            <div class="form-group">
                <label for="modelo">ASESOR</label>
                <input
                    class="form-control"
                    id="asesor"
                    required
                    v-model="car.adviser"
                    name="asesor"
                />
            </div>

            <div class="form-group">
                <label for="modelo">MODELO</label>
                <input
                    class="form-control"
                    id="modelo"
                    required
                    v-model="car.model"
                    name="modelo"
                />
            </div>

            <div class="form-group">
                <label for="matricula">MATRÍCULA</label>
                <input
                    class="form-control"
                    id="matricula"
                    required
                    v-model="car.carRegistration"
                    name="matricula"
                />
            </div>

            <div class="form-group">
                <label for="minutos">MINUTOS OPERACIÓN</label>
                <input
                    class="form-control"
                    id="minutos"
                    required
                    v-model="car.countdown"
                    name="minutos"
                />
            </div>
            <br/>
            <button @click="saveCar"
                    class="btn btn-success">Guardar
            </button>
        </div>

        <div v-else>
            <h4>Guardado con éxito!</h4>
            <button class="btn btn-success"
                    @click="newCar">Nuevo
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CarDataService from "@/services/CarDataService";
import Car from "@/types/Car";

@Component
export default class AddCar extends Vue {
    private car : Car = {
        id : "",
        model : "",
        carRegistration : "",
        arrivalDay : "",
        entryTime : "",
        exitTime : "",
        countdown : "",
        active : true,
        adviser : "",
    };
    private submitted : boolean = false;

    saveCar() {
        let data = {
            id : this.car.id,
            model : this.car.model,
            carRegistration : this.car.carRegistration,
            arrivalDay : this.car.arrivalDay,
            entryTime : this.car.entryTime,
            exitTime : this.car.exitTime,
            countdown : this.car.countdown,
            active : this.car.active,
            adviser : this.car.adviser,
        };
        CarDataService.create( data )
        .then( ( response ) => {
            this.car.id = response.data.id;
            console.log( response.data );
            this.submitted = true;
        } )
        .catch( ( e ) => {
            console.log( e );
        } );
    }

    newCar() {
        this.submitted = false;
        this.car = {} as Car;
    }
}
</script>

<style scoped>
.submit-form {
    max-width: 300px;
    margin: auto;
    font-family: '微软雅黑', serif;
}
</style>
