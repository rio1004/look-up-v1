import ThemedBtn from "@/components/themed-btn";
import ThemedInput from "@/components/themed-input";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { StyleSheet } from "react-native";

type Props = {};

const Login = (props: Props) => {
  return (
    <ThemedView style={styles.loginContainer}>
      <ThemedText colorVariant="primary" type="title">
        LOOK UP
      </ThemedText>
      <ThemedView style={styles.mt32}>
        <ThemedText type="subtitle">Login to your account</ThemedText>
        <ThemedView style={[styles.mt16, { width: 300 }]}>
          <ThemedInput />
          <ThemedInput />
        </ThemedView>
        <ThemedView style={styles.flexBetween}>
          <ThemedView style={styles.flexBetween}>
            <ThemedText>Remember me</ThemedText>
          </ThemedView>
          <ThemedText colorVariant="accent">Forgot your password</ThemedText>
        </ThemedView>

        <ThemedView style={[styles.flexBetween, styles.mt16]}>
          <ThemedView style={styles.dash} />
          <ThemedText>Or continue with</ThemedText>
          <ThemedView style={styles.dash} />
        </ThemedView>

        <ThemedView style={styles.btnContainer}>
          <ThemedBtn
            title="Continue with Google"
            colorVariant="accent"
            variant="default"
          />
          <ThemedBtn
            title="Continue with Facebook"
            colorVariant="accent"
            variant="default"
          />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mt16: {
    marginTop: 16,
  },
  mt32: {
    marginTop: 32,
  },
  loginContainer: {
    display: "flex",
    minHeight: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  dash: {
    height: 1,
    width: 60,
    backgroundColor: "#fff",
  },
  flexBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    marginTop: 16,
  },
});
