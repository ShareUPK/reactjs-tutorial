# Nội dung 

1. document.createElement()
    - Đang nằm ở bộ nhớ chưa render ra thẻ h1
2. document.body.appendChild()
    - Render text vào element h1
3. console.dir()
4. innerText, id, className, style

# Kiến thức bổ sung

* Object.assign()

- Được sử dụng để sao chép các giá trị của tất cả thuộc tính có thể liệt kê từ một hoặc nhiều đối tượng nguồn đến một đối tượng đích. Nó sẽ trả về đối tượng đích. 

- Cú pháp
Object.assign(target, ...sources)

{
    target: Đối tượng đích
    sources: Đối tượng nguồn
}

- Ví dụ
var obj = { a: 1 };
var copy = Object.assign({}, obj);

# Từ khóa chuyên ngành 

- Immutability: bất biến 
/ɪˌmjuːtəˈbɪləti/