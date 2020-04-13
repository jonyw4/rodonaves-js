export default async function auth() {
  const data = await this.fetch('/token', 'POST', undefined, {
    auth_type: this.mode,
    grant_type: 'password',
    username: this.username,
    password: this.password,
  });

  this.token = data.access_token;
  return true;
}
