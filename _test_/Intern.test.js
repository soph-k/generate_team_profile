///////////////////////// Require Files /////////////////////////
const Intern = require('../lib/Intern');

///////////////////////// Jest Test /////////////////////////
describe('Test Intern class', () => {
  const name = 'Sophia';
  const id = 1;
  const email = 'soph@example.com';
  const github = 'soph';
  const school = 'UMN'

  const intern = new Intern(name, id, email, github, school);

  it('True if new intern is made', () => {
    expect(intern instanceof Intern).toEqual(true);
  })
  it('Intern match name', () => {
    expect(intern.nameMember()).toEqual(name);
  })
  it('Intern match id', () => {
    expect(intern.idMember()).toEqual(id);
  })
  it('Intern match email', () => {
    expect(intern.emailMember()).toEqual(email);
  })
  it('Intern match github', () => {
    expect(intern.githubMember()).toEqual(github);
  })
  it('Intern match school', () => {
    expect(intern.schoolMember()).toEqual(school);
  })
  it('Intern match role', () => {
    expect(intern.roleMember()).toEqual('Intern');
  })
})
