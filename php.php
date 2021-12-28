<?php
$path='upload/';
$path.=$_FILES['image']['name'];
if (! is_dir('upload')){
    mkdir('upload');
}
move_uploaded_file($_FILES['image']['tmp_name'] , $path);
