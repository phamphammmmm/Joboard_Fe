<template>
    <div class="login">
        <div class="login-form">
            <h2>Welcome back to Job Board</h2>
            <p>Sign in to your account below</p>
            <form action="/login" method="post">
                <div class="form-row">
                    <label for="email" style="text-align: left;">Email:</label>
                    <input type="email" name="email" id="email" placeholder="Email">
                </div>

                <div class="form-row">
                    <label for="password" style="text-align: left;">Password:</label>
                    <input type="password" name="password" id="password" placeholder="Password">
                </div>
                <p class="text-center" style="padding: 0;">
                    Forgot password?<a href="{{ route('register') }}"></a>
                </p>
                <input type="submit" value="Login">
            </form>

            <p>
                Don't you have an account?<a href="{{ route('register') }}"> Register Now </a>
            </p>
        </div>
        <div class="login-image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
}
</script>

<style scoped>
@import '@/styles/Auth/Login.css';
</style>
