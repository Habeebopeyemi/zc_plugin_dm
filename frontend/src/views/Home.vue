<template>
    <div class="home position-relative d-flex flex-column">
        <div
            class="direct-message-contents d-flex flex-column position-relative"
        >
            <div class="direct-message-header">
                <DmProfileHeader />
            </div>
            <div
                class="direct-message-body-contents d-flex flex-column position-relative"
            >
                <div class="direct-message-allmessages-body position-relative">
                    <DmSingleMessageBox />
                </div>
                <div class="direct-message-input-footer">
                    <DmInputxtf />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import DmProfileHeader from '@/components/dmProfileHeader.vue';
import Bookmark from '@/components/bookmarks.vue';
import DmInputxtf from '@/components/dmInputTextField.vue';
import DmSingleMessageBox from '@/components/dmSingleMessageBox.vue';

export default {
    name: 'Home',
    components: {
        DmProfileHeader,
        Bookmark,
        DmInputxtf,
        DmSingleMessageBox,
    },
};
</script>

<style scoped>
div.home {
    width: 100%;
    background-color: #f9f9f9;
}

div.home .direct-message-contents {
    min-width: 0;
    min-height: 0;
    background-color: #f9f9f9;
}

.direct-message-body-contents {
    flex: 1;
    min-height: 0;
}

.direct-message-allmessages-body {
    flex: 1;
    min-height: 0;
}

.direct-message-input-footer {
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
}
</style>
