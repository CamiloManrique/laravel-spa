<template>
    <div class="row margin-50">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">

                <div class="panel-heading">Área Administrativa</div>

                <div class="panel-body">
                    <form class="form-horizontal" @submit.prevent="login" @keydown="form.onKeydown($event)">

                        <div class="form-group">
                            <label for="email" class="col-md-4 control-label">E-Mail Address</label>
                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" name="email" v-model="form.email" required autofocus>
                                <has-error :form="form" field="email"></has-error>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="password" class="col-md-4 control-label">Password</label>
                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" name="password" v-model="form.password" required>
                                <has-error :form="form" field="password"></has-error>
                            </div>
                        </div>


                        <div class="form-group">
                            <div class="col-md-8 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    Login
                                </button>

                                <a class="btn btn-link">
                                    Forgot Your Password?
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import { Form, HasError, AlertError } from 'vform'
    export default{
        components:{
            HasError,
            AlertError
        },
        data(){
            return {
                form: new Form({
                    email: '',
                    password: ''
                })
            }
        },
        methods:{
            login () {
                this.form.post(this.api('/login'))
                    .then(({ data }) => {
                        console.log(data)
                        this.saveToken(data.api_token)
                        this.$router.push('home')
                    })
            }
        }
    }
</script>

<style lang="scss">
</style>