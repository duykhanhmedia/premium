function createSnowflakeIcon() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake-icon';

    // Thiết lập kích thước ngẫu nhiên
    const size = Math.random() * 20 + 20 + 'px'; // Kích thước từ 20px đến 40px
    snowflake.style.fontSize = size;

    // Thiết lập vị trí ban đầu ngoài màn hình
    snowflake.style.left = Math.random() * 100 + 'vw'; // Vị trí ngang ngẫu nhiên
    snowflake.style.top = Math.random() * -100 + 'px'; // Vị trí dọc từ -100px để xuất hiện từ trên

    // Thiết lập thời gian hoạt động và độ trễ
    snowflake.style.animationDuration = Math.random() * 15 + 15 + 's'; // Thời gian rơi từ 15s đến 30s
    snowflake.style.animationDelay = Math.random() * 5 + 's'; // Độ trễ từ 0s đến 10s

    return snowflake;
}

function createSnowflakeIcons(count) {
    const container = document.getElementById('snowflakes');
    for (let i = 0; i < count; i++) {
        container.appendChild(createSnowflakeIcon());
    }
}

// Tạo 250 biểu tượng bông tuyết
createSnowflakeIcons(350);

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';

    // Thiết lập kích thước ngẫu nhiên
    const size = Math.random() * 10 + 10 + 'px'; // Kích thước từ 10px đến 20px
    snowflake.style.width = size;
    snowflake.style.height = size;

    // Thiết lập vị trí ban đầu ngoài màn hình
    snowflake.style.left = Math.random() * 100 + 'vw'; // Vị trí ngang ngẫu nhiên
    snowflake.style.top = Math.random() * -100 + 'px'; // Vị trí dọc từ -100px để xuất hiện từ trên

    // Thiết lập thời gian hoạt động và độ trễ
    snowflake.style.animationDuration = Math.random() * 15 + 15 + 's'; // Thời gian rơi từ 15s đến 30s
    snowflake.style.animationDelay = Math.random() * 5 + 's'; // Độ trễ từ 0s đến 10s

    return snowflake;
}

function createSnowflakes(count) {
    const container = document.getElementById('snowflakes');
    for (let i = 0; i < count; i++) {
        container.appendChild(createSnowflake());
    }
}

// Tạo 350 bông tuyết với hình ảnh
createSnowflakes(350);
