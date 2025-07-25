describe('TaskController', function () {
let $controller, $httpBackend, $rootScope, $scope;

beforeEach(module('todoApp'));

beforeEach(inject(function ($controller, $httpBackend, $rootScope) {
$controller = $controller;
$httpBackend = $httpBackend;
$rootScope = $rootScope;
$scope = $rootScope.$new();
}));

afterEach(() => {
$httpBackend.verifyNoOutstandingExpectation();
$httpBackend.verifyNoOutstandingRequest();
});

it('should load tasks on init', function () {
$httpBackend.expectGET('http://localhost:3000/api/tasks').respond(200, [
{ id: 1, title: 'Test Task', description: 'Test' }
]);

$controller('TaskController', { $scope });
$httpBackend.flush();

expect($scope.tasks.length).toBe(1);
expect($scope.tasks[0].title).toBe('Test Task');
});

it('should add a new task and reset form', function () {
$httpBackend.expectGET('http://localhost:3000/api/tasks').respond(200, []); // for controller init
$controller('TaskController', { $scope });
$httpBackend.flush();


$scope.newTask = { title: 'New Task', description: 'Unit Test' };

$httpBackend.expectPOST('/api/tasks').respond(200, {
  id: 2,
  title: 'New Task',
  description: 'Unit Test'
});

$httpBackend.expectGET('http://localhost:3000/api/tasks').respond(200, []); // for $scope.getTasks()

$scope.addTask();
$httpBackend.flush();

expect($scope.message).toContain('Task added');
expect($scope.newTask).toEqual({});
});

it('should mark task as done and reload tasks', function () {
$httpBackend.expectGET('http://localhost:3000/api/tasks').respond(200, []); // for controller init
$controller('TaskController', { $scope });
$httpBackend.flush();


const taskId = 1;

$httpBackend.expectPUT(`/api/tasks/${taskId}/done`).respond(204);
$httpBackend.expectGET('http://localhost:3000/api/tasks').respond(200, []); // for getTasks()

$scope.markDone(taskId);
$httpBackend.flush();

expect($scope.message).toContain('Task marked as done');
});
});