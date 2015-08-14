var app = angular.module("redditApp", []);

app.controller('RedditController' ,function($scope) {



  //$scope.showme=false;
  $scope.test = 'test';
  $scope.posts = [{votes:3, title:'Blah', author:'Alfredicus', imgUrl:'http://placehold.it/350x150',description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, asperiores autem dolores eius enim error facilis, molestiae, molestias perferendis possimus quas quasi qui sint sunt suscipit tempora veniam? Assumenda, optio!"},
    {votes: 5, title:'Test Title', author:'Alf', imgUrl:'http://placehold.it/350x150',description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, asperiores autem dolores eius enim error facilis, molestiae, molestias perferendis possimus quas quasi qui sint sunt suscipit tempora veniam? Assumenda, optio!"}
  ]

  var Post = function(title,author,imgUrl,description) {
    this.title=title;
    this.author = author;
    this.imgUrl = imgUrl;
    this.description = description;
    this.votes=0;
    this.date= new Date()

  };
  $scope.upVote = function (post) {
    post.votes ++
    console.log(moment([2015, 07, 13]).calendar());
  };

  $scope.downVote = function(post) {
    post.votes --
  };

  $scope.addPost = function (title, author, imgUrl, description, $event) {
    $event.preventDefault();
    var post = new Post(title,author,imgUrl,description);
    $scope.showme=false;

    $scope.posts.push(post);
  }
})