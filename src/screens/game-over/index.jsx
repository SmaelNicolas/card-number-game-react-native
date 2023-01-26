import React from "react";
import { Button, Image, Text, View } from "react-native";
import { Card } from "../../components/card";
import { styles } from "./styles";

export const GameOver = ({ rounds, userNumber, onHandleRestart }) => {
	return (
		<View style={styles.container}>
			<Card style={styles.content}>
				<Image
					source={{
						uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISERISEBIQDw8QEBgVEBUSEBsNEBUPFREYFhURGBUYKCggGBolGxkVIjEhJSorLi4uFx80OTQtOCgtLisBCgoKDg0OGxAQGy8lHyYtLS8rLzArMCstLS0tLS8rLS0tLS0vLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0rLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcEBQgDAQL/xABSEAABAwIBBwQMBwwKAwEAAAABAAIDBBESBQYTFCExYQcXVJIyQVFSU3GTsrPR0uIVFiJzdIGxJCUzNDVCY3KRocHDIyY2RGJkhJTC4YKi8Aj/xAAbAQEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EAEERAAEDAgQDAwgEDQUAAAAAAAEAAgMEEQUSITFBUWETcdEUIlKBkaGx0hVTksEGIyQlMjNCVHOCosLwFmJjcrL/2gAMAwEAAhEDEQA/AKNREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREX1bTJmQKqpa51NTzTtabOMcZeA617Gy6G5OcnOiybTRzxGOVjXB7XtwvB0riLg8LKqxPFGUTAQA43sRexGhN9jy5L0C6xMmcnuTHQwudSRlzoWFxxv2ksBJ7JZHNxkrocfXk9pZtdnVQMEkbqylbI0Oa5pmaHB4uC0i+w32LmPXJPCSdcrm8Po6ytzkzPZa2+Y3vfbUbWWRNl0fzcZK6HH15PaTm4yV0OPrye0ucNdl8JJ1ymuy+Ek65Vl9A1f707+r515mUh5ScmxU2UZ4YGCKJgjwtBJAvE0nabneSoqvYlz3fnPe4gDe5xO4Dip5ya5u1UeU6Z09HUshBkxulpnsjF4JALlwsNtvrV1JM2jph2jrlreJsXFo9ep9drrzcr5yPZEpqyqnZVRNmYynxNDiW2dpWC/wAkjtFWvzc5K6HH15PaW9q6impRjlfT0rXHCHPc2BpcQThxG1zsJtwVPcs2X2ST0xo6psjRCQ809QHgOx7A7Ad/jXJN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ERERERERERERbGmyrLG0NY4Bo/wA7zftrXIvCAd1simkiOaNxB6Ej4LafDc/ft6jfUnw3P37eo31LVosezZyCkfSNX9a77R8VtPhufv29RvqWPWV0ktsZvh2DZbYVhovQxoNwFhJWVEjcr5HEciSQiIiyUZFnUeUZIgQwgAm52B32rBReEAixWccr4nZmEg8xoVkVVS+R2J5u63ctuWOiIBZeOe55LnG5O5RZ9JlGWMYWOAGK+0A7frWAiEA6FZRSvidmjJB5g2W0+HJ+/HUb6k+HJ+/HUb6lq0WPZs5BSPpGr+td9o+K2nw5P346jfUnw5P346jfUtWidmzkF79I1f1rvtHxW0+HJ+/HUb6lja6/S6W/wDSYr3t27W3LERehjRsFrfWVEls73GxuLkmx5rafDk/fjqN9Sx6yukltjN8O7Zbf4lhogY0G4CSVlRI3K+RxHIklFs4ssTNaGhzbNFm/IB2LWIvS0HcLXFPLCbxuLT0JHwW0+HJ+/HUb6l5VeUZZBhe4EB19gA2/UsBFiI2g3AW19dUvaWukcQdwXEoiIs1FRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERZOrjiiIiauOKauOKIiJq44pq44oiImrjimrjiiIiauOKauOKIiJq44pq44oiImrjimrjiiIiauOKauOKIiJq44pq44oiImrjimrjiiIiauOKauOKIiJq44pq44oiImrjimrjiiIiauOKauOKIiJq44pq44oiImrjimrjiiIiauOKauOKIiJq44pq44oiImrjivurjiiIi//9k=",
					}}
					style={styles.image}
				/>
				<Text style={styles.text}>User Number: {userNumber}</Text>
				<Text style={styles.text}>Number of rounds: {rounds}</Text>
				<Button title="Restart" onPress={onHandleRestart} />
			</Card>
			<Text style={styles.end}>Game Over</Text>
		</View>
	);
};
