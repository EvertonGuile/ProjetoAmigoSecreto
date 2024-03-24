import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            TextField(
              autofocus: true,
              keyboardType: TextInputType.text,
              style: new TextStyle(fontSize: 20),
              decoration: InputDecoration(
                labelText: "Login",
              ),
            ),
            TextField(
              autofocus: true,
              obscureText: true,
              keyboardType: TextInputType.text,
              style: new TextStyle(fontSize: 20),
              decoration: InputDecoration(
                labelText: "Senha",
              ),
            ),
            Divider(),
            ButtonTheme(
              height: 60.0,
              child: RaisedButton(
                onPressed: () => {},
                child: Text("Entrar",
                    style: TextStyle(color: Colors.white, fontSize: 20)),
                color: Colors.red,
              ), // RaisedButton
            )
          ],
        ),
      ),
    );
  }
}