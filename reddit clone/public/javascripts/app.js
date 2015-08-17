var app = angular.module("redditApp", ['angularMoment','ngAnimate']);
//app.run(function(amMoment) {
//  amMoment.changeLocale('usa');
//});
app.controller('RedditController' ,function($scope) {
  $scope.test = 'test';
  $scope.posts = [{comments:[{author:'Alf',comment:'cool!'}],votes:3, title:'Blah', author:'Alfredicus', imgUrl:'http://www.pageresource.com/wallpapers/wallpaper/cats-cute-cat-animal-cute-grass-photo.jpg',description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, asperiores autem dolores eius enim error facilis, molestiae, molestias perferendis possimus quas quasi qui sint sunt suscipit tempora veniam? Assumenda, optio!"},
    {comments:[{author:'test',comment:'cool!'},{author:'alfred',comment:'rad!'}],votes: 5, title:'Test Title', author:'Alf', imgUrl:'http://placehold.it/350x150',description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, asperiores autem dolores eius enim error facilis, molestiae, molestias perferendis possimus quas quasi qui sint sunt suscipit tempora veniam? Assumenda, optio!"}
  ];

  $scope.posts[0].date = moment([2015, 07, 13]);
  $scope.posts[1].date = moment([2015, 07, 14]);


  var Post = function(title,author,imgUrl,description) {
    this.title=title;
    this.author = author;
    this.imgUrl = imgUrl;
    this.description = description;
    this.votes=0;
    this.date= moment();
    this.comments=[];

  };
  $scope.upVote = function (post) {
    post.votes ++;
    console.log(moment([2015, 07, 13]).calendar());
  };

  $scope.downVote = function(post) {
    post.votes --;
  };

  $scope.addPost = function (title, author, imgUrl, description, $event) {
    $event.preventDefault();
    var post = new Post(title,author,imgUrl,description);
    $scope.showme=false;

    $scope.posts.push(post);
  }

  //$scope.showCom = function(post){
  //  if( $scope.showComments === true) {
  //    $scope.showComments = false;
  //  } else {
  //    $scope.showComments = true;
  //  }
  //
  //}

  $scope.addComment = function(author,comment,post) {
    var commentObj = {};
    commentObj.author = author;
    commentObj.comment = comment;
    post.comments.push(commentObj)
  }
})