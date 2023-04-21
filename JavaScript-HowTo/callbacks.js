const loginUser = (email, password, onSucess, onError) => {
    setTimeout(() => {
            const error = false;
            if (error){
                return onError(new Error('error in login!'))
            }
        console.log("User logged!");
        onSucess({ email });
    }, 1500);
};

const getUserVideos = (email, callback) => {
    setTimeout(() => {
        callback(['video1', 'video2', 'video3']);
    }, 100);
};

const getVideoDetails = (video, callback) => {
    setTimeout(() => {
        callback({ title: 'video title'});
    }, 2500);
};

const user = loginUser(
    "felipe@gmail.com",
    '123456',
    (user) => {
        getUserVideos(user.email, (videos) => {
        getVideoDetails(videos[0], (videoDetails) => {
            console.log({ videos })
            console.log({ videoDetails })
        })
        });
    },
    (error) => {
        console.log({ error });
    });

// console.log({ user })