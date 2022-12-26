<template>
    <el-table
        :data="cars"
        border
        class="table-custom"
        :row-class-name="tableRowClassName">
        <el-table-column
            prop="id"
            label="ID">
        </el-table-column>
        <el-table-column
            prop="adviser"
            label="ASESOR">
        </el-table-column>
        <el-table-column
            prop="model"
            label="MODELO">
        </el-table-column>
        <el-table-column
            prop="carRegistration"
            label="MATRÍCULA">
        </el-table-column>
        <el-table-column
            prop="arrivalDay"
            label="DÍA DE ENTRADA">
        </el-table-column>
        <el-table-column
            prop="entryTime"
            label="HORA DE ENTRADA">
        </el-table-column>
        <el-table-column
            prop="exitTime"
            label="HORA DE SALIDA">
        </el-table-column>
        <el-table-column
            prop="countdown"
            label="MINUTOS RESTANTES">
        </el-table-column>
        <el-table-column
            label="OPERACIONES">
            <template slot-scope="scope">
                <el-button
                    size="mini"
                    type="danger"
                    @click="removeCar(scope.$index, scope.row)">Borrar
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CarDataService from "@/services/CarDataService";
import Car from "@/types/Car";

@Component
export default class CarsList extends Vue {
    private cars : Car[] = [];

    retrieveCars() {
        CarDataService.getAll()
        .then( ( response ) => {
            this.cars = response.data;
            console.log( response.data );
        } )
        .catch( ( e ) => {
            console.log( e );
        } );
    }

    removeCar( index : any, row : any ) {
        CarDataService.delete( row.id )
        .then( ( response ) => {
            console.log( response.data );
            this.retrieveCars();
        } )
        .catch( ( e ) => {
            console.log( e );
        } );
    }

    tableRowClassName( row : any ) {
        const countdown = row.row.countdown;
        if( countdown < 30 && countdown > 10 ) {
            return "warning-row";
        }
        else if( countdown < 10 ) {
            return "danger-row";
        }
        else {
            return "success-row";
        }
    }

    mounted() {
        this.retrieveCars();
        window.setInterval( () => {
            this.retrieveCars();
        }, 10000 );
    }
}
</script>

<style>
.el-table .danger-row {
    background: #ff9371;
    /*border-spacing: 10cm;*/
}

.el-table .warning-row {
    background: #ffe650;
}

.el-table .success-row {
    background: #d1ffc1;
}

.table-custom {
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
    font-family: '微软雅黑', serif;
}
</style>
