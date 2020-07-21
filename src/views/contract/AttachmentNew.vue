<template>
    <div class="contractNew">
        <div class="contractNew-header">
            <div class="header-back">
            </div>
            <div class="header-headline">
                <span>ПРИЛОЖЕНИЕ К ДОГОВОРУ</span>
            </div>
            <div class="header-options" @click="addAttach()">
                <span>ГОТОВО</span>
            </div>
        </div>
        <div class="contractNew-content">
            <div class="content-item">
                <span class="item-header">Сметный расчет на работы по поставке, монтажу, отделке и пуско-наладке</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите сметный расчет..." v-model="payment"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Техническая спецификация на лифты ____ остановок марки</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите техническую спецификацию..." v-model="specifications"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Перечень исполнительной документации на работы по поставке, монтажу, отделке и пуско-наладке</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите перечень исполнительной документации..." v-model="documentation"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Техническое задание на работы по поставке, монтажу, отделке и пуско-наладке</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите техническое задание на работы..." v-model="technical_task"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Перечень оборудования в счет оплаты которого Подрядчик перечисляет аванс на работы по поставке, монтажу, отделке</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите перечень оборудования..." v-model="equipment"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AttachmentNew',
    data(){
        return {
            payment: '',
            specifications: '',
            documentation: '',
            technical_task: '',
            equipment: ''
        }
    },
    methods:{
        addAttach(){
            this.$emit('addAttach', {
                payment: this.payment,
                specifications: this.specifications,
                documentation: this.documentation,
                technical_task: this.technical_task,
                equipment: this.equipment,
            })
        }
    }
}
</script>

<style lang="scss">
@import "../../assets/mixin/_mixin.scss";

.contractNew {
    @include pageContent();
    .contractNew-header {
        @include newHeader();
    }
    .contractNew-content {
        @include newContent();
    }
}
</style>