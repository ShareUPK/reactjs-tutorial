# Nội dung 

1. Tại sao phải sử dụng React-DOM?

    - Để có thể render được element ra trình duyệt này
    - Là một thư viện nó là cầu nối giữa React và DOM -> giúp React tạo ra 1 element và lấy element đó render vào DOM
    - React-Native -> Dùng build ra IOS, Android, 

2. Tại sao lại tách React-DOM ra?

    - Từ xưa, chưa có thư viện React-Native thì lúc đó React và phần tương tác với DOM vẫn nằm chung trong thư viện React thôi
    - Khi Framework React-Native ra đời thì nhận ra core React có thể tách riêng ra và lúc đó tách riêng thành phần có thể làm việc với DOM trong thư viện React ra và đặt tên nó là React-DOM. Khi đó phần còn lại chỉ là React 

3. Render UI

    - Cú pháp: ƒ render(element, container, callback) {}