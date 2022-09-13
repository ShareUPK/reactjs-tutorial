# Nội dung

```
1. React.createElement() -> React element
2. So sánh với document.createElement() -> DOM element
3. Thay đổi id, className, style, ...
4. Thêm: text, HTML
5. Tạo:
    <h1 title="Hello" class="heading">Hello guys!</h1>
6. Tạo: 
    <ul>
        <li>JavaScript</li>
        <li>ReactJS</li>
    </ul>
7. Tạo: 
    <div>
        <h2 title="Học React tại F8">Học ReactJS</h2>
        <p>Học ReactJS từ cơ bản đến nâng cao</p>
    </div>
```

# Lý thuyết 

```
- document.createElement() trả về 1 đối tượng là DOM element
- React.createElement() trả về 1 đối tượng là React element

- Khi làm việc với DOM thành phần nhỏ nhất là node
- Khi làm việc với React thì thành phần nhỏ nhất là React element

- Tag nào cũng là một React element
```

# Cú pháp 

```
- React.createElement(type, props, chidlren, n)
- Children cũng là 1 props
```

# Công cụ

jsfiddle.net