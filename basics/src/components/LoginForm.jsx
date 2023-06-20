function LoginForm(props) {
    return (<form>
        <div>
            <label for="username">{ props.sum}</label>
            <input id="username" name="username"/>
        </div>
    </form>)
}
export const sum = 1 + 1;
export default LoginForm