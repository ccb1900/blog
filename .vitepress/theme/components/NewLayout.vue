<template>
    <Layout>
        <template #doc-before>
            <div style="padding-top: 20px" class="post-info" v-if="!$frontmatter.page">
                {{ $frontmatter.date?.substring(0, 10) }} &nbsp;&nbsp;
                <span v-for="item in $frontmatter.tags"
                    ><a :href="withBase(`/${$frontmatter.lang}/pages/tags.html?tag=${item}`)"> {{ item }}</a></span
                >
            </div>
        </template>
    </Layout>
    <amp-auto-ads type="adsense" data-ad-client="ca-pub-1817374283725610"> </amp-auto-ads>
    <Copyright />
</template>
<script setup>
import DefaultTheme from 'vitepress/theme'
import Copyright from './Copyright.vue'
import { withBase } from 'vitepress'
const { Layout } = DefaultTheme
</script>
