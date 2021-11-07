///////////////////////// Require Files /////////////////////////
const Employee = require('../lib/Employee');

///////////////////////// Jest Test /////////////////////////
describe('Test employee', () => {
  const name = 'Sophia';
  const id = 1;
  const email = 'soph@example.com';
  const github = 'soph'

  const employee = new Employee(name, id, email, github);

  it('True if new employee is made', () => {
    expect(employee instanceof Employee).toEqual(true);
  })
  it('Employee match name', () => {
    expect(employee.nameMember()).toEqual(name);
  })
  it('Employee match id', () => {
    expect(employee.idMember()).toEqual(id);
  })
  it('Employee match email', () => {
    expect(employee.emailMember()).toEqual(email);
  })
  it('Employee match github', () => {
    expect(employee.githubMember()).toEqual(github);
  })
  it('Employee match role', () => {
    expect(employee.roleMember()).toEqual('Employee');
  })
})
