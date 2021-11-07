///////////////////////// Require Files /////////////////////////
const Engineer = require('../lib/Engineer');

///////////////////////// Jest Test /////////////////////////
describe('Test Engineer class', () => {
  const name = 'Sophia';
  const id = 1;
  const email = 'soph@example.com';
  const github = 'soph';

  const engineer = new Engineer(name, id, email, github);

  it('True if new engineer is made', () => {
    expect(engineer instanceof Engineer).toEqual(true);
  })
  it('Engineer match name', () => {
    expect(engineer.nameMember()).toEqual(name);
  })
  it('Engineer match id', () => {
    expect(engineer.idMember()).toEqual(id);
  })
  it('Engineer match email', () => {
    expect(engineer.emailMember()).toEqual(email);
  })
  it('Engineer match github', () => {
    expect(engineer.githubMember()).toEqual(github);
  })
  it('Engineer match role', () => {
    expect(engineer.roleMember()).toEqual('Engineer');
  })
})
