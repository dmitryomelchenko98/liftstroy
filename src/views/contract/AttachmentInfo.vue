<template>
    <div class="AttachmentInfo">
        <div class="AttachmentInfo-header">
            <div class="header-back">
                <img src="../../assets/image/back.svg" alt="">
                <span>ДОГОВОРА</span>
            </div>
            <div class="header-headline">
                <span>ПРИЛОЖЕНИЕ К ДОГОВОРУ №000</span>
            </div>
            <div class="header-options">
                <img src="../../assets/image/download.svg" alt="" class="download">
                <img src="../../assets/image/change.svg" alt="" class="change">
                <img src="../../assets/image/delete.svg" alt="" class="delete">
            </div>
        </div>
        <div class="AttachmentInfo-content">
            <div class="content-item">
                <span class="item-header">Сметный расчет на работы по поставке, монтажу, отделке и пуско-наладке</span>
                <span class="item-entry">Сметный расчет на работы по поставке, монтажу, отделке и пуско-наладке</span>
            </div>
            <div class="content-item">
                <span class="item-header">Техническая спецификация на лифты ____ остановок марки</span>
                <span class="item-entry">Техническая спецификация на лифты ____ остановок марки</span>
            </div>
            <div class="content-item">
                <span class="item-header">Перечень исполнительной документации на работы по поставке, монтажу, отделке и пуско-наладке</span>
                <span class="item-entry">Перечень исполнительной документации на работы по поставке, монтажу, отделке и пуско-наладке</span>
            </div>
            <div class="content-item">
                <span class="item-header">Техническое задание на работы по поставке, монтажу, отделке и пуско-наладке</span>
                <span class="item-entry">Техническое задание на работы по поставке, монтажу, отделке и пуско-наладке</span>
            </div>
            <div class="content-item">
                <span class="item-header">Перечень оборудования в счет оплаты которого Подрядчик перечисляет аванс на работы по поставке, монтажу, отделке</span>
                <span class="item-entry">Перечень оборудования в счет оплаты которого Подрядчик перечисляет аванс на работы по поставке, монтажу, отделке</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AttachmentInfo'
}
</script>

<style lang="scss">
@import "../../assets/mixin/_mixin.scss";

.AttachmentInfo {
    @include pageContent();
    .AttachmentInfo-header {
        @include infoHeader();
    }
    .AttachmentInfo-content {
        height: calc(100% - 70px);
        width: 100%;
        overflow-y: auto;
        @include tableContract();
    }
}
</style>