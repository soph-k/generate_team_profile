///////////////////////// Require Files /////////////////////////
const Manager = require('../lib/Manager');

///////////////////////// Jest Test /////////////////////////
describe('Test Employee class', () => {
  const name = 'Sophia';
  const id = 1;
  const email = 'soph@example.com';
  const github = 'soph';
  const office = 5;

  const manager = new Manager(name, id, email, github, office);

  it('True if new manager is made', () => {
    expect(manager instanceof Manager).toEqual(true);
  })
  it('Manager match name', () => {
    expect(manager.nameMember()).toEqual(name);
  })
  it('Manager match id', () => {
    expect(manager.idMember()).toEqual(id);
  })
  it('Manager match email', () => {
    expect(manager.emailMember()).toEqual(email);
  })
  it('Manager match github', () => {
    expect(manager.githubMember()).toEqual(github);
  })
  it('Manager match office', () => {
    expect(manager.officeMember()).toEqual(office);
  })
  it('Manager match role', () => {
    expect(manager.roleMember()).toEqual('Manager');
  })
})