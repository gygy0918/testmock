
<template>
    <div class="post-list">
        <template v-if="loading > 0">
            Loading
        </template>
        <template v-else>
            <ul>
                <li v-for="user in users" >
                    id:<p>{{user.id}} </p>
                    <br/>
                    用户名：<p>{{ user.username }}</p>
                    <br/>
                    <!--<span @click="authorId = post.author.id">{{ post.author.firstName }} {{ post.author.lastName }}</span>-->
                    密码：<p>{{user.password }} </p>
                    <br/>
                    电话：<p>{{user.phone? user.phone:'暂无'}} </p>
                    <br/>

                    <!--<post-upvoter :post-id="post.id"></post-upvoter>-->
                </li>
            </ul>
        </template>

        <!--<author v-if="authorId" :id="authorId"></author>-->
    </div>
</template>

<script>
    import gql from 'graphql-tag';
//    import PostUpvoter from './PostUpvoter.vue';
//    import Author from './Author.vue';
    // GraphQL query
    const postsQuery = gql`
  query all {
    users {
      id
        username
    }
  }
`;
    // Component def
    export default {
        // Local state
        data: () => ({
            users: [],
            loading: 0,
            authorId: null,
        }),
        // Apollo GraphQL
        apollo: {
            // Local state 'posts' data
            users: {
                query: postsQuery,
                loadingKey: 'loading',
            },
            result(data) {
                console.log(data.author.firstName);
            },
        },
        // Computed properties
//        created: {
//            sortedPosts() {
//                return this.users
//            }
//        },
    };
</script>
