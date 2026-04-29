<% await tp.File.Rename (tp.File.Path (true). Split ('/')
[tp.File.Path (true). Split ('/'). Length-2] + " " +
((tp.File.Title.Includes ("未命名") || tp.File.Title.ToLowerCase (). Includes ("untitled")) ? (await tp.System.Prompt ("请输入要创建的文件名")） ： tp. File. Title)) %>